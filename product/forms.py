from django import forms
from .models import Product


# creating a form
class ProductForm(forms.ModelForm):
	def __init__(self, *args, **kwargs):
		super(ProductForm, self).__init__(*args, **kwargs)
		self.fields['name'].widget.attrs = {
			'class': 'form-control col-md-6'
		}

		self.fields['description'].widget.attrs = {
			'class': 'form-control col-md-6'
		}
		
		self.fields['price'].widget.attrs = {
			'class': 'form-control col-md-6',
			'step': 'any',
			'min': '1',
		}

	# create meta class
	class Meta:
		# specify model to be used
		model = Product

		# specify fields to be used
		fields = [
			"name",
			"description",
			"price"
		]
