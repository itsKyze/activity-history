package cluster
type NodeRegistry struct {
	nodes map[string]string
}
func NewRegistry() *NodeRegistry {
	return &NodeRegistry{nodes: make(map[string]string)}
}
