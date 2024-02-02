// JSONResult«项目计划应用响应对象»
export interface IJSONResult项目计划应用响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目计划应用响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目计划应用响应对象
export interface I项目计划应用响应对象 {
    // 应用id
    appId: number;
    // 应用code
    appCode: string;
    // 项目计划id
    id: number;
    // 项目计划编号
    code: string;
    // 任务流程状态
    flowStatus: string;
    // 数据状态
    dataStatus: string;
}
