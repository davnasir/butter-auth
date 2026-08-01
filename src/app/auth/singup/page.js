"use client";
import React, { useState } from "react";
import { CircleCheck, Eye, EyeSlash, FloppyDisk } from "@gravity-ui/icons";
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, InputGroup, Label, TextArea, TextField } from "@heroui/react";

const page = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        console.log(data); // Data দেখার জন্য
        alert("Form submitted successfully!");
    };
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="flex justify-center items-center bg-amber-200">
            <div className="h-screen py-50">
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
                                <Input placeholder="John Doe" />
                                <FieldError />
                            </TextField>
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
                                    reset
                                </Button>
                            </Fieldset.Actions>
                        </FieldGroup>
                    </Fieldset>
                </Form>
            </div>
        </div>
    );
};

export default page;