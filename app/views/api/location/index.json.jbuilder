@locations.each do |location|
    json.set! location.id do
        json.partial! 'location', location: location
    end
end
json.order @locations.order(:order).pluck(:id)
