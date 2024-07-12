
import { Card, Dropdown, DropdownItem } from "flowbite-react";
import { Button } from "flowbite-react";


export function StudentCard(props) {
    return (
        <Card className="student-card bg-transparent fade-animation" imgSrc={props.image} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-100 dark:text-white urbanist-bold ">
                {props.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <Button color="success" className="quicksand" onClick={props.pressVote} pill>
                    Vote Now
                </Button>
            </p>

        </Card>
    );
}
