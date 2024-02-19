// JSONResult«ExcelTitleQueryResponseDTO»
export interface IJSONResultExcelTitleQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExcelTitleQueryResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ExcelTitleQueryResponseDTO
export interface IExcelTitleQueryResponseDTO {
    // 表数据ID
    tableDataId: number;
    // 标题定义列表
    titleDefineList: ITitleDefineDTO[];
}
// TitleDefineDTO
export interface ITitleDefineDTO {
    // undefined
    code: string;
    // undefined
    name: string;
}
