// JSONResult«设置检验任务检验方式响应DTO»
export interface IJSONResultSetsTheCheckModeOfTheCheckTaskInResponseToTheDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISetTheCheckModeResponseDTOForTheCheckTask;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设置检验任务检验方式响应DTO
export interface ISetTheCheckModeResponseDTOForTheCheckTask {
    // 检验方式
    taskInspectionMethodType: string;
}