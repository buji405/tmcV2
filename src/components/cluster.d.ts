interface ClusterData {
  cores: number;
  failures_24h: number;
  labels: string[];
  name: string;
  namespaces: string[];
  nodes: number;
  os: string;
  pods: number;
  provider: string;
  total_memory_gb: number;
}
