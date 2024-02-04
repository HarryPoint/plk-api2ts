// 职业危害档案查询请求
export interface I职业危害档案查询请求 {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
}
// JSONResult«职业危害档案查询响应»
export interface IJSONResult职业危害档案查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I职业危害档案查询响应;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 职业危害档案查询响应
export interface I职业危害档案查询响应 {
    // 新增职业病数量
    newOccupationalDiseaseQuantity: number;
    // 职业禁忌症数量
    occupationContraindicationQuantity: number;
    // 岗前体检
    preJobPhysicalExamination: number;
    // 岗中体检
    inJobPhysicalExamination: number;
    // 离岗体检
    postJobPhysicalExamination: number;
}