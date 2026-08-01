'use client';
import React, { useState } from "react";
import { CircleCheck, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, InputGroup, Label, TextArea, TextField } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";


const Singup = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const userData = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            callbackURL: '/'
        });
        if (error) {
            alert("Singup erro")
        }
        if (data) {
            alert("Singup ok")
        }
    };

    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="flex justify-center items-center bg-amber-200">
            <div className="h-screen py-20">
                <Form className="w-full" onSubmit={onSubmit}>
                    <Fieldset>
                        <Fieldset.Legend> Create a New Account </Fieldset.Legend>
                        <FieldGroup>
                            <TextField
                                isRequired
                                name="name"
                                validate={(value) => {
                                    if (value.length < 3) {
                                        return "Name must be at least 3 characters";
                                    }
                                    return null;
                                }}
                            >
                                <Label>Name</Label>
                                <Input placeholder="John Doe" name="name" />
                                <FieldError />
                            </TextField>
                            <TextField isRequired type="email">
                                <Label>Email</Label>
                                <Input placeholder="john@example.com" name="email" />
                                <FieldError />
                            </TextField>
                            <TextField className="w-full max-w-70" >
                                <Label>Password</Label>
                                <InputGroup>
                                    <Input
                                        className="w-full max-w-70"
                                        type={isVisible ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        name="password"
                                        placeholder="Inter Your Password"
                                    />
                                    <InputGroup.Suffix className="pe-0">
                                        <Button
                                            isIconOnly
                                            aria-label={isVisible ? "Hide password" : "Show password"}
                                            size="sm"
                                            variant="ghost"
                                            onPress={() => setIsVisible(!isVisible)}
                                        >
                                            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                        </Button>
                                    </InputGroup.Suffix>
                                </InputGroup>
                            </TextField>
                            <Fieldset.Actions>
                                <Button type="submit">
                                    <CircleCheck></CircleCheck>
                                    Submit
                                </Button>
                                <Button variant="secondary">
                                    <Link href="login">login</Link>
                                </Button>
                            </Fieldset.Actions>
                        </FieldGroup>
                    </Fieldset>
                </Form>
            </div>
        </div>
    );
};

export default Singup;