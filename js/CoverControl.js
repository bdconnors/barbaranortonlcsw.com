
class CoverControl{

    constructor(content = fragments){
        this.content = content;
        $('.bnlcsw-frag-link').click(this.select);
        this.set('home');
    }

    select = (e) => {

        const container = $('#bnlcswcoverbody');
        const stub = $(e.currentTarget).attr('data-bnlcsw-fragment');

        container.fadeOut(600,()=>{
            this.set(stub);
            container.fadeIn();
        }); 
    }
    get = (stub) => {
        const stubStr = stub.toLowerCase();
        return this.content[stubStr];
    }
    set = (stub) => {
        this.setPart('heading',stub);
        this.setPart('subheading',stub);
        this.setPart('body',stub);
    }
    setPart=(part,stub)=>{
        const fragment = this.get(stub);
        const value = fragment[part];
        const container = $('#bnlcswcover'+part);
        container.empty();
        container.append(value);
    }
}