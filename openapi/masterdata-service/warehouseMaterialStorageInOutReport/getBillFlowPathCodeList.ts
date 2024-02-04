// JSONResult«物料收发单据列表响应对象»
export interface IJSONResult物料收发单据列表响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I物料收发单据列表响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料收发单据列表响应对象
export interface I物料收发单据列表响应对象 {
    // 列表单据
    billHeadCode: I物料收发单据列表单据响应对象[];
    // 选择单据
    billSelectCode: I物料收发单据列表单据响应对象[];
}
// 物料收发单据列表单据响应对象
export interface I物料收发单据列表单据响应对象 {
    // id
    id: number;
    // code
    code: string;
    // 单据名称
    name: string;
    // 出入库类型
    storageLogType: string;
}
