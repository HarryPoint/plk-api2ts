import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/queryExcelTitleByIdUsingGET
export default function fetchMethod(params: { id: number }) {
    return http<IJSONResultExcelTitleQueryResponseDTO>({
        url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/queryExcelTitleById",
        method: "get",
        params,
    });
}
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
