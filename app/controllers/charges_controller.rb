class ChargesController < ApplicationController

  def new
  end

  def create
    # Amount in cents
    @amount = 1999

    # Set your secret key: remember to change this to your live secret key in production
    # See your keys here https://dashboard.stripe.com/account/apikeys
    Stripe.api_key = "sk_test_qv46W9gobx2AEeSebzq7vWQn"

    token = params[:stripeToken]

    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :source => token
    )

    # Charge the Customer instead of the card
    Stripe::Charge.create(
      :amount => @amount,
      :currency => "aud",
      :customer => customer.id,
      :description => 'You Bought Squadrawn swag'
    )

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end

end
