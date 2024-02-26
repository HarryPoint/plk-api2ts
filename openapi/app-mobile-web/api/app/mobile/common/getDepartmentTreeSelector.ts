import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/公共相关/getDepartmentSelectorUsingGET
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListIdNameNumberTreeVO>(
        {
            url: "/app-mobile-web/api/app/mobile/common/getDepartmentTreeSelector",
            method: "get",
        },
        extraOptions,
    );
}
/** JSONResult«List«Id，名称，编号树状VO»» */
export interface IJSONResultListIdNameNumberTreeVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IIdNameNumberTreeVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** Id，名称，编号树状VO */
export interface IIdNameNumberTreeVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
    /** 子集 */
    children: IIdNameNumberTreeVO[];
}
