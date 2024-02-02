// JSONResult«生产工艺树状响应对象»
export interface IJSONResult生产工艺树状响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产工艺树状响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产工艺树状响应对象
export interface I生产工艺树状响应对象 {
    // 生产工艺id
    produceTechnologyId: number;
    // 生产工艺名称
    produceTechnologyName: string;
    // 物料id(该工艺对应的物料id)
    materialId: number;
    // 生产工艺节点响应对象
    nodeResponse: I生产工艺节点响应对象;
    // 整个结构是否有工艺路径
    hasRouting: boolean;
}
// 生产工艺节点响应对象
export interface I生产工艺节点响应对象 {
    // 生产工艺id
    produceTechnologyId: number;
    // 节点类型
    type: string;
    // 节点数据 -- 不同的节点类型的数据格式不一样
    nodeData;
    // 下一节点
    nextNode: I生产工艺节点响应对象;
    // 分支节点列表
    branches: I生产工艺节点响应对象[];
    // 序列号
    serialNo: string;
}
