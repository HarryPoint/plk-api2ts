// JSONResult«ProcessMoveOutImportSynchronizationOutputDTO»
export interface IJSONResultProcessMoveOutImportSynchronizationOutputDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessMoveOutImportSynchronizationOutputDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProcessMoveOutImportSynchronizationOutputDTO
export interface IProcessMoveOutImportSynchronizationOutputDTO {
    // undefined
    id: number;
    // undefined
    importStatus: string;
    // undefined
    failureMessage: string;
    // undefined
    totalCount: number;
    // undefined
    importedCount: number;
    // undefined
    importSuccessQuantity: number;
    // undefined
    importFailureQuantity: number;
    // undefined
    failureProcessMoveOutList: IProcessMoveOutImportFailureOutputDTO[];
    // undefined
    repeatProcessMoveOutList: IProcessMoveOutImportFailureOutputDTO[];
    // undefined
    optedProduceTaskIdList: number[];
}
// ProcessMoveOutImportFailureOutputDTO
export interface IProcessMoveOutImportFailureOutputDTO {
    // undefined
    produceOrderCode: string;
    // undefined
    processName: string;
    // undefined
    failureMessage: string;
}
