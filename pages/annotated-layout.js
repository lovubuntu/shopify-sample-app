import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  Stack,
  TextField,
  SettingToggle,
  TextStyle,
} from '@shopify/polaris';
import React from 'react';

class AnnotatedLayout extends React.Component {
  state = {
  	discount: '10%',
  	enabled: false,
  };

  handleSubmit = () => {
  	this.setState({
  		discount: this.state.discount
  	});
  	console.log(this.state);
  }

  handleChange = (field) => {
  	return (value) => this.setState({[field]: value});
  }

  handleToggle = () => {
  	this.setState({enabled: !this.state.enabled});
  }

  render() {
  	const {discount, enabled} = this.state;
  	const contentStatus = enabled ? 'Enable': 'Disable';
  	const textStatus = enabled ? 'enabled': 'disabled'
    return (
      <Page>
        <Layout>
          <Layout.AnnotatedSection
            title="Default discount"
            description="Add a product to Sample App, it will automatically be discounted."
          >
            <Card sectioned>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={discount}
                    onChange={this.handleChange('discount')}
                    label="Discount percentage"
                    type="discount"
                  />
                  <Stack distribution="trailing">
                    <Button primary submit>
                      Save
                    </Button>
                  </Stack>
                </FormLayout>
              </Form>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="Price updates"
            description="Temporarily disable all Sample App price updates"
          >
            <SettingToggle
              action={{
                content: contentStatus,
                onAction: this.handleToggle,
              }}
              enabled={this.state.enabled}
            >
              This setting is{' '}
              <TextStyle variation="strong">{textStatus}</TextStyle>.
            </SettingToggle>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }
}

export default AnnotatedLayout;