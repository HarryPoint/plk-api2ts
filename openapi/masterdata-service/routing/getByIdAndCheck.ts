import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺路径相关/getByIdAndCheckUsingGET_1
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string; Id?: string } }, extraOptions?: any) {
    return http<IJSONResultRoutingDeprecatedVO>(
        {
            url: "/masterdata-service/routing/getByIdAndCheck",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«RoutingDeprecatedVO» */
export interface IJSONResultRoutingDeprecatedVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IRoutingDeprecatedVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** RoutingDeprecatedVO */
export interface IRoutingDeprecatedVO {
    /** 工艺路径编码 */
    code?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** id */
    id?: string;
    /** 是否默认 */
    isDefault?: ERoutingDeprecatedVO_isDefault;
    /** 所属主物料bomid */
    materialBomId?: string;
    /** 所属主物料id */
    materialId?: string;
    /** 工艺路径名称 */
    name?: string;
}

export enum ERoutingDeprecatedVO_isDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
