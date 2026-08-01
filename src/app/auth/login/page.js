"use client";
import React, { useState } from "react";
import { CircleCheck, Eye, EyeSlash, } from "@gravity-ui/icons";
import { Button, FieldError, FieldGroup, Fieldset, Form, Input, InputGroup, Label, TextArea, TextField } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Loginpage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const userData = Object.fromEntries(formData.entries());
        const { data, error } = await await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: '/',
        });

    };
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="flex justify-center items-center bg-amber-200">
            <div className="h-screen py-10">
                <Form className="w-full " onSubmit={onSubmit}>
                    <Fieldset>
                        <Fieldset.Legend> Login Page  </Fieldset.Legend>
                        <FieldGroup className="mt-5">
                            <TextField isRequired name="email" type="email">
                                <Label>Email</Label>
                                <Input placeholder="john@example.com" />
                                <FieldError />
                            </TextField>
                            <TextField className="w-full max-w-70" name="password">
                                <Label>Password</Label>
                                <InputGroup>
                                    <InputGroup.Input
                                        className="w-full max-w-70"
                                        type={isVisible ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
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
                                <Button type="reset" variant="secondary">
                                    <Link href="singup">Singup</Link>
                                </Button>
                            </Fieldset.Actions>
                        </FieldGroup>
                    </Fieldset>
                </Form>
            </div>
        </div>
    );
};

export default Loginpage;