import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/工艺路径相关/getByIdAndCheckUsingGET_1
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultRoutingDeprecatedVO>(
        {
            url: "/masterdata-service/routing/getByIdAndCheck",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«RoutingDeprecatedVO» */
export interface IJSONResultRoutingDeprecatedVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IRoutingDeprecatedVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** RoutingDeprecatedVO */
export interface IRoutingDeprecatedVO {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 工艺路径编码 */
    code?: string;
    /** 工艺路径名称 */
    name?: string;
    /** 所属主物料id */
    materialId?: string;
    /** 所属主物料bomid */
    materialBomId?: string;
    /** 是否默认 */
    isDefault?: ERoutingDeprecatedVO_isDefault;
}

export enum ERoutingDeprecatedVO_isDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
