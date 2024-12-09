import Barras from "../atoms/Barras";
function Bottom() {
    return (

        <>
            <div className="flex flex-col lg:flex-row w-full h-full">
                <div className="lg:w-1/2">
                    {/* left */}
                    <Barras />
                </div>
                <div className="lg:w-1/2">
                    {/* right */}
                    {/* <Barras /> */}

                </div>
            </div>

        </>
    );
}

export default Bottom;