// 检验项计算DTO
export interface I检验项计算DTO {
    // 抽样标准id
    qmsSamplingStandardsId: number;
    // 检验方式
    inspectionMethodType: string;
    // 样本量
    sampleSize: number;
}
// JSONResult«检验项计算响应DTO»
export interface IJSONResult检验项计算响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I检验项计算响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 检验项计算响应DTO
export interface I检验项计算响应DTO {
    // undefined
    qmsSamplingStandardsId: number;
    // undefined
    batchRangeStartValue: number;
    // undefined
    batchRangeEndValue: number;
    // undefined
    samplingStandardsLevel: string;
    // undefined
    samplingStandardsCharacterCode: string;
    // undefined
    sampleSize: number;
    // undefined
    samplingStandardsAql: string;
    // undefined
    percentage: number;
    // undefined
    ac: number;
    // undefined
    re: number;
    // undefined
    inspectionSampleSize: number;
}
