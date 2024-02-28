import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/员工相关/getIdCodeByIdUsingGET_1
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultIdNameNumberVO>(
        {
            url: "/masterdata-service/employee/getIdCodeById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«Id，名称，编号VO» */
export interface IJSONResultIdNameNumberVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdNameNumberVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
