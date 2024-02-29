import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/queryTableTitleByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultTableTitleQueryResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/queryTableTitleById",
            method: "GET",
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
    ts?: string;
}
/** TableTitleQueryResponseDTO */
export interface ITableTitleQueryResponseDTO {
    /** 表数据ID */
    tableDataId?: string;
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
    isMasterTableField?: ETableTitleDefineDTO_isMasterTableField;
}

export enum ETableTitleDefineDTO_isMasterTableField {
    Y = "Y",
    N = "N"
}
