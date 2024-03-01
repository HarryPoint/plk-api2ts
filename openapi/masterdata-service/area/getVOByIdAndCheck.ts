import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/区域相关/getVOByIdAndCheckUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultAreaVO>(
        {
            url: "/masterdata-service/area/getVOByIdAndCheck",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«区域VO» */
export interface IJSONResultAreaVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IRegionalVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 区域VO */
export interface IRegionalVO {
    /** 区域编号 */
    code?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** id */
    id?: string;
    /** 区域名称 */
    name?: string;
    /** 父级id */
    parentId?: string;
}
