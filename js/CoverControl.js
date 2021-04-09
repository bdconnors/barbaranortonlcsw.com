
class CoverControl{

    constructor(content = fragments){

        this.content = content;

        $('.bnlcsw-frag-link').click(this.set);
        $('#fragmentContainer').append(this.get('home')); 

    }

    set = (e) => {

        const container = $('#fragmentContainer');
        const stub = $(e.currentTarget).attr('data-bnlcsw-fragment');
        const frag = this.get(stub)

        container.fadeOut(600,()=>{
            container.empty();
            container.append(frag);
            container.fadeIn();
        }); 
    }
    get = (stub) => {

        const stubStr = stub.toLowerCase();

        return this.content[stubStr];
    }
}