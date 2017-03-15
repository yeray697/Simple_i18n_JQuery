function translatePage(path) 
{
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.indexOf('-') > -1) {
        userLang = userLang.substr(0, userLang.indexOf(','));
    }
    if (path.slice(-1)!=='/')
        path = path + "/";
    $.getJSON(path+userLang+'.json')
        .done(function (data, textStatus, jqXHR) {
            $('[data-translatekey]').each(function() {
                var element = $(this);
                element.text(data[element.data("translatekey")]);
            });
        });
}; 
