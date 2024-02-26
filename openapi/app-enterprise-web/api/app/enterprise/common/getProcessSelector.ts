import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/公共相关/getProcessSelectorUsingGET
*/
export default function fetchMethod(params: { nameOrCode?: string }, extraOptions?: any) {
    return http<ITheJSONResultListOperationSelectsToReturnVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/common/getProcessSelector",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«工序选择返回VO»» */
export interface ITheJSONResultListOperationSelectsToReturnVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IProcedureSelectionReturnsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 工序选择返回VO */
export interface IProcedureSelectionReturnsVO {
    /** id */
    id: number;
    /** 工序名称 */
    name: string;
    /** 工序编号 */
    code: string;
    /** 区域id */
    areaId: number;
    /** 区域 */
    area: IRegionalVO;
}
/** 区域VO */
export interface IRegionalVO {
    /** id */
    id: number;
    /** 区域名称 */
    name: string;
    /** 区域编号 */
    code: string;
    /** 父级id */
    parentId: number;
}
