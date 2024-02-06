// JSONResult«项目任务导入记录查询响应»
export interface IJSONResultProjectTaskImportRecordQueryResponse {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectTaskImportRecordQueryResponse;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务导入记录查询响应
export interface IProjectTaskImportRecordQueryResponse {
    // 导入文件id
    importFileId: string;
    // 项目id
    projectId: number;
    // 项目计划id
    projectPlanId: number;
    // 导入状态
    importStatus: string;
    // 总数
    totalQuantity: number;
    // 成功条数
    successQuantity: number;
    // 失败条数
    failedQuantity: number;
    // 进度
    progress: number;
    // 行数据失败信息列表
    failedMessageList: IProjectTaskImportRecordErrorMessageQueryResponse[];
    // 系统失败信息
    failedMessage: string;
}
// 项目任务导入记录错误信息查询响应
export interface IProjectTaskImportRecordErrorMessageQueryResponse {
    // 行下标
    rowNo: number;
    // 失败信息
    failedMessage: string;
}
