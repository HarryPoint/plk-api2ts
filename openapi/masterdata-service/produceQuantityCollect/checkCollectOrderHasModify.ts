// JSONResult«校验响应对象»
export interface IJSONResult校验响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I校验响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 校验响应对象
export interface I校验响应对象 {
    // 是否已创建, 当返回值为Y时, 已创建; 为N时, 没有创建
    isCreated: string;
    // 是否变更过, 当返回值为Y时, 有变动; 为N时, 没有变动
    isModify: string;
}
