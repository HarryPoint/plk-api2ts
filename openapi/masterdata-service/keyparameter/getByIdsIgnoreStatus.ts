import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/关键参数相关/getByIdsIgnoreStatusUsingPOST_1
*/
export default function fetchMethod(data: IIdCollectionInformation, extraOptions?: any) {
    return http<IJSONResultListKeyParameterDropDownSelectAListToSearchForResponseDtos>(
        {
            url: "/masterdata-service/keyparameter/getByIdsIgnoreStatus",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** id集合信息 */
export interface IIdCollectionInformation {
    /** id集合 */
    ids: number[];
}
/** JSONResult«List«关键参数下拉选择列表搜索响应DTO»» */
export interface IJSONResultListKeyParameterDropDownSelectAListToSearchForResponseDtos {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IKeyParameterDropDownSelectAListToSearchForResponseDtos[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 关键参数下拉选择列表搜索响应DTO */
export interface IKeyParameterDropDownSelectAListToSearchForResponseDtos {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
