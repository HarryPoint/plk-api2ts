import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16400/doc.html#/default/工序相关/getByIdsIgnoreStatusUsingPOST_3
*/
export default function fetchMethod(options: { data: IIdCollectionInformation }, extraOptions?: any) {
    return http<ITheJSONResultListOperationSelectsToReturnVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/process/getByIdsIgnoreStatus",
            method: "POST",
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
/** JSONResult«List«工序选择返回VO»» */
export interface ITheJSONResultListOperationSelectsToReturnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcedureSelectionReturnsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工序选择返回VO */
export interface IProcedureSelectionReturnsVO {
    /** id */
    id?: string;
    /** 工序名称 */
    name?: string;
    /** 工序编号 */
    code?: string;
    /** 区域id */
    areaId?: string;
    /** 区域 */
    area?: IRegionalVO;
}
/** 区域VO */
export interface IRegionalVO {
    /** id */
    id?: string;
    /** 区域名称 */
    name?: string;
    /** 区域编号 */
    code?: string;
    /** 父级id */
    parentId?: string;
}
