import { useState } from "react";
import { Button } from "../components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog"
import { Input } from "../components/ui/input"
import { IoMailSharp } from "react-icons/io5";
import axios from "axios";

const Subscribe = () => {
    const [email, setEmail] = useState('')
    const [subscriptionState, setSubscriptionState] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (email === '') {
            return;
        }
        
        axios.post('/api/add_user', { email })
        .then(() => {
            console.log('User added successfully')
            setEmail('')
            setSubscriptionState('outline outline-green-600')
            setTimeout(() => {
                setSubscriptionState('')
            }, 1000);
        })
        .catch((error) => {
            console.log(error)
            setSubscriptionState('outline outline-red-600')
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className="text-md nofont saira">Subscribe</Button>
            </DialogTrigger>
            <DialogContent className="p-20 w-auto">
                <DialogHeader>
                    <DialogTitle className="text-4xl">NEWSLETTER SIGNUP</DialogTitle>
                </DialogHeader>
                <form className="grid gap-4 py-4 w-96" onSubmit={handleSubmit}>
                    <p className="nofont saira">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                    </p>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            id="email"
                            placeholder="Your email here"
                            className={`col-span-3 rounded-sm nofont saira ` + subscriptionState}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <Button variant="destructive" className="bg-red-600 size-12"><IoMailSharp size="100" /></Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Subscribe;