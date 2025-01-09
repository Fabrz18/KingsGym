window.addEventListener("resize",function(){
    const DivPromotion = document.getElementById("PostPromotionsId")
    if (window.innerWidth<=600){
        DivPromotion.innerHTML = `
            <a class="" href=""><img src="https://assets.smartfit.com.br/attachments/7901eb1f61659184b94c3b1180dd284d544dd8e1/store/53a728cc5f8158b650c1dd09c2c45a014016bd6b9e43073d144d8177209d/banner_mobile" alt="NewPromotion" title="Nuevas Promociones"></a>
        `;
    }else {
        DivPromotion.innerHTML = `
             <a class="" href=""><img src="https://assets.smartfit.com.br/attachments/1b6487cd5ba8a6db438c031001dc85060fad4be1/store/1a526fec7ca03bc9c06d4b756324cfa6a3b1e9f4dce2110eec10114c09fa/banner_desktop" alt="NewPromotion" title="Nuevas Promociones"></a>

        `;
    }
});

window.addEventListener("DOMContentLoaded", function () {
    const DivPromotion = document.getElementById("PostPromotionsId")
    if (window.innerWidth <= 600){
        DivPromotion.innerHTML = `
            <a class="" href=""><img src="https://assets.smartfit.com.br/attachments/7901eb1f61659184b94c3b1180dd284d544dd8e1/store/53a728cc5f8158b650c1dd09c2c45a014016bd6b9e43073d144d8177209d/banner_mobile" alt="NewPromotion" title="Nuevas Promociones"></a>
        `;
    }else {
        DivPromotion.innerHTML = `
             <a class="" href=""><img src="https://assets.smartfit.com.br/attachments/1b6487cd5ba8a6db438c031001dc85060fad4be1/store/1a526fec7ca03bc9c06d4b756324cfa6a3b1e9f4dce2110eec10114c09fa/banner_desktop" alt="NewPromotion" title="Nuevas Promociones"></a>

        `;
    }
});


