import { SaveOutlined } from "@ant-design/icons"
import { Col, Form, Input, InputNumber, Modal, Row } from "antd"
import { useContext, useEffect } from "react"
import ModalsContext from "../../../context/ModalsContext"
import Swal from 'sweetalert2'

const ModalCadastreProduct = () => {

    const { modalCadastreProduct } = useContext(ModalsContext)
    const { visible, close } = modalCadastreProduct
    const [form] = Form.useForm();

    const submitForm = async() => {

        
        let formValues
        try {formValues = await form.validateFields()}
        catch(e) {}

        if(formValues) {
            close()
            Swal.fire(
                'Produto criado com sucesso!',
                'Agora já é possivel ver o produto na lista',
                'success'
              )
            
            console.log('formValues', formValues)

        }
        
    }

    useEffect(() => {
        if(visible) {
            form.resetFields()
        }
    },[visible,form])

    const ckeckPrice = (_,value) => {
        if (value > 100){
        return Promise.resolve();
    }
     return Promise.reject(new Error('Preço muito baixo'))

    }


    return (
        <Modal title='Cadastro Produto'
            visible={visible}
            cancelText='Cancelar'
            okText='Salvar'
            okButtonProps={{
                icon: <SaveOutlined />
            }
            }
            onCancel={close}
            onOk={()=> submitForm()}
        >
            <Form form={form}>
                <Form.Item label='Coleção' name='collection'
                rules={[
                    {required: true, message: "Digite uma coleção"}
                ]}>
                    <Input placeholder="Digite o nome da coleção" />
                </Form.Item>
                <Form.Item label='Linha' name='modelLine'
                rules={[
                    {required: true, message: "Digite um modelo"}
                ]}>
                    <Input placeholder="Digite o nome da linha da coleção"/>
                </Form.Item>
                <Form.Item label='Nome do produto' name='name'
                rules={[
                    {required: true, message: "Digite um nome"}
                ]}>
                    <Input placeholder="Digite o nome do produto"/>
                </Form.Item>
                <Row gutter={16} >
                    <Col lg={10} md={24}>
                        <Form.Item label='Preço' name='price'
                        rules={[{
                            required: true, message: "Digite um preço"
                        }, 
                        {validator: ckeckPrice}]}>
                            <InputNumber placeholder="000.00" prefix='$' style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col lg={14} md={24}>
                        <Form.Item label='Preço com desconto' name='discountedPrice'
                        rules={[{
                            required: true, message: "Digite um preço"
                        }, 
                        {validator:ckeckPrice}]}>
                            <InputNumber prefix='$' placeholder="000.00" style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>

            </Form></Modal>
    )
}

export default ModalCadastreProduct