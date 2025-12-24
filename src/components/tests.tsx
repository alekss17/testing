import React from "react";

interface TestProps<T> {
    age: T
}

function Test<TestProps>(age: TestProps): TestProps {
    return age
}

const TestForProps = () => {

     const value = Math.random() < 0.5
    ? "hello world"
    : Math.floor(Math.random() * 100);

    return (
        <>
        Age or Hello World: {Test(value) }
        </>
    )
}

export default TestForProps;
