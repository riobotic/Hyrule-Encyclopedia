$(function () {
    const BASE_URL = 'https://botw-compendium.herokuapp.com/api/v2/entry/';

    let apiData;

    const $form = $('form');
    const $input = $('input[type="text"]');
    const $main = $('main');
    

    $form.on('submit', handleSubmit);

    function handleSubmit(evt) {
        evt.preventDefault(); 
        const Entry = $input.val();
        $.ajax(`${BASE_URL}${Entry}`)
            .then(function (data) {
                apiData = data;
                render();
            }, function (error) {
                console.log(error);
            });
    }

    function render() {
        $main.html(`
        <p>Name:</p>
        <p id="name">${apiData.data.name}</p>
        <p>Common Locations:</p>
        <p id="common_locations">${apiData.data.common_locations}</p>
        <p>Description:</p>
        <p id="description">${apiData.data.description}</p>   
         `);
    }
});