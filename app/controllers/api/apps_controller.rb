class Api::AppsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # POST /apps
  def create
    params.permit!
    @app = nil
    case params[:type_id].to_i
    when 0
      @app = CompanyApp.new(app_params)
    when 1
      @app = EmployeeApp.new(app_params)
    when 2
      @app = AutoApp.new(app_params)
    end

    if @app.save
      render json: @app, status: :created
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  private

  def app_params
    params[:type_id] = params[:type_id].to_i
    params.except(:controller, :action)
  end
end
