@parentId_arr.each do |parentId|
    json.set! parentId do
        pLoc = @locations.select{|loc| loc.route_id == parentId}
        pLoc.each do |location|
            json.set! location.id do
                json.partial! 'location', location: location
            end
        end
        # debugger
        json.order pLoc.sort_by{|ar| ar.order}.map{|ar| ar.id}
    end
end
# debugger