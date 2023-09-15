class Api::AppTypesController < ApplicationController
  def show
    response = find_response(app_type_id)

    if response.nil?
      render status: :not_found
    else
      render json: response, status: :ok
    end
  end

  private

  # hard-coding api response
  def find_response(id)
    forms_file = File.read(File.join(File.dirname(__FILE__), 'forms.json'))
    forms = JSON.parse(forms_file)
    forms[id]
  end

  def app_type_id
    params[:id].to_i
  end
end
