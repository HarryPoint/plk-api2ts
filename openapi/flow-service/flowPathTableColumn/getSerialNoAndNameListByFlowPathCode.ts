import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程表格相关/getSerialNoAndNameListByFlowPathCodeUsingGET
*/
export default function fetchMethod(params: { enterpriseId: number; flowPathCode: string }, extraOptions?: any) {
    return http<IJSONResultListIdNameNumberVO>(
        {
            url: "/flow-service/flowPathTableColumn/getSerialNoAndNameListByFlowPathCode",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«Id，名称，编号VO»» */
export interface IJSONResultListIdNameNumberVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IIdNameNumberVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
