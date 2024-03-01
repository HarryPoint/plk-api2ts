import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/部门相关/getIdCodeTreeByEnterpriseIdUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; nameOrCode?: string } }, extraOptions?: any) {
    return http<IJSONResultListIdNameNumberTreeVO>(
        {
            url: "/masterdata-service/department/getIdCodeTreeByEnterpriseId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«Id，名称，编号树状VO»» */
export interface IJSONResultListIdNameNumberTreeVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IIdNameNumberTreeVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id，名称，编号树状VO */
export interface IIdNameNumberTreeVO {
    /** 子集 */
    children: IIdNameNumberTreeVO[];
    /** 编号 */
    code: string;
    /** id */
    id: string;
    /** 名称 */
    name: string;
}
