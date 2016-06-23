class DesignsController < ApplicationController
  before_action :set_design, only: [:show, :edit, :update, :destroy]

  # GET /designs
  # GET /designs.json
  def index

    if !@current_user
        redirect_to login_path
    end

    if @current_user
        @designs = [];
        userDesignIds = DesignsUsers.where(user_id: @current_user.id);
        # loop throuch each design id and push it to an array
        userDesignIds.each do | item |
            currentDesign = Design.find(item.design_id);
            @designs.push(currentDesign);
        end
    end



  end

  # GET /designs/1
  # GET /designs/1.json
  def show
  end

  def app
    @current_design = params[:id]
    @current_user = User.find_by( :id => session[:user_id] )
  end


  # GET /designs/new
  def new
    @design = Design.new
  end

  # GET /designs/1/edit
  def edit
  end

  # POST /designs
  # POST /designs.json
  def create
    @design = Design.new(design_params)

    respond_to do |format|
      if @design.save
        DesignsUsers.create( {design_id: @design.id, user_id: session[:user_id]} )
        format.html { redirect_to @design, notice: 'Design was successfully created.' }
        format.json { render :show, status: :created, location: @design }
      else
        format.html { render :new }
        format.json { render json: @design.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /designs/1
  # PATCH/PUT /designs/1.json
  def update
    respond_to do |format|
      if @design.update(design_params)
        format.html { redirect_to @design, notice: 'Design was successfully updated.' }
        format.json { render :show, status: :ok, location: @design }
      else
        format.html { render :edit }
        format.json { render json: @design.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /designs/1
  # DELETE /designs/1.json
  def destroy
    @design.destroy
    respond_to do |format|
      format.html { redirect_to designs_url, notice: 'Design was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_design
      @design = Design.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def design_params
      params.require(:design).permit(:canvas_data, :url)
    end
end
