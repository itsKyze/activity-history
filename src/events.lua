local EventQueue = {}
EventQueue.__index = EventQueue
function EventQueue.new()
    return setmetatable({ queue = {} }, EventQueue)
end
function EventQueue:push(event)
    table.insert(self.queue, event)
end
return EventQueue
