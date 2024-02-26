import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/queryTableTitleByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
    return http<IJSONResultTableTitleQueryResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/queryTableTitleById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«TableTitleQueryResponseDTO» */
export interface IJSONResultTableTitleQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITableTitleQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** TableTitleQueryResponseDTO */
export interface ITableTitleQueryResponseDTO {
    /** 表数据ID */
    tableDataId?: number;
    /** 标题定义列表 */
    titleDefineList?: ITableTitleDefineDTO[];
}
/** TableTitleDefineDTO */
export interface ITableTitleDefineDTO {
    /** undefined */
    code?: string;
    /** undefined */
    name?: string;
    /** undefined */
    isMasterTableField?: string;
}
