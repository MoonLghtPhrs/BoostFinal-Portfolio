import Button from 'react-bootstrap/Button';

function GeneralButton(variantText, text) {
    return  (
        <>
        <Button variant='{variantText}'> {text}</Button></>
    )
}