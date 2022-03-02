
export default function ProjectObject(props){
    var numero = props.number;
    return(
    <div className="font-monty basis-2/5">
                <figure id={props.id} className=" opacity-0 translate-y-12 transition duration-1000 ease-in-out bg-slate-100 flex flex-col rounded-xl">
                    <img className="h-fit w-auto rounded-xl" src={props.imageSource}></img>
                    <div className="pt-2 text-center mx-8 mb-8 mt-2">
                        <figcaption className="font-medium">
                            <div className="text-sky-500">
                                {props.title}
                            </div>
                            <div class="text-slate-700">
                                {props.techStack}
                            </div>
                        </figcaption>
                        <p className="text-slate-700 text-lg font-medium">
                            {props.desc}
                        </p>
                    </div>
                </figure>

                <script>
                document.addEventListener("DOMContentLoaded", function() {
                    setTimeout(function(){
                        var intro = document.querySelector(`#${props.id}`);
                        intro.classList.remove("opacity-0");
                        intro.classList.remove("translate-y-12");    
                        }, (100 * numero))
                    })
                </script>

    </div>
    )
}