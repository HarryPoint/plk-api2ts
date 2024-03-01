import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产事件管理/getScrapCategoryCountListByMaterialIdUsingGET
*/
export default function fetchMethod(options: { params: { BeginTime?: string; MaterialId?: string; EndTime?: string; EnterpriseId?: string } }, extraOptions?: any) {
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
    /** 响应结果 */
    data?: IIdValueVO[];
    /** 返回消息说明 */
    msg?: string;
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
