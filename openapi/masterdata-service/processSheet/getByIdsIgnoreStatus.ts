import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/工艺卡相关/getByIdsIgnoreStatusUsingPOST_4
*/
export default function fetchMethod(options: { data: IIdCollectionInformation }, extraOptions?: any) {
    return http<IJSONResultListProcessDropDownListToSearchForResponseDtos>(
        {
            url: "/masterdata-service/processSheet/getByIdsIgnoreStatus",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** id集合信息 */
export interface IIdCollectionInformation {
    /** id集合 */
    ids?: string[];
}
/** JSONResult«List«工艺卡下拉选择列表搜索响应DTO»» */
export interface IJSONResultListProcessDropDownListToSearchForResponseDtos {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessDropDownSelectListSearchResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工艺卡下拉选择列表搜索响应DTO */
export interface IProcessDropDownSelectListSearchResponseDTO {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
}
