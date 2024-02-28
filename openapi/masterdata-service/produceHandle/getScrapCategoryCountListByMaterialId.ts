import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产事件管理/getScrapCategoryCountListByMaterialIdUsingGET
*/
export default function fetchMethod(options: { params: { beginTime?: string; materialId?: string; endTime?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListIdIndicatesTheValueVO>(
        {
            url: "/masterdata-service/produceHandle/getScrapCategoryCountListByMaterialId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«Id，值VO»» */
export interface IJSONResultListIdIndicatesTheValueVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdValueVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id，值VO */
export interface IIdValueVO {
    /** id */
    id: string;
    /** 值 */
    value: number;
}
